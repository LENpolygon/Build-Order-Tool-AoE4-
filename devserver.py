import http.server
from os.path import exists
from os import makedirs
import socketserver
import urllib.request
import webbrowser

PORT = 8000
PROD_URL = 'https://age4builder.com'
DIRECTORY = './public'
IMG_DIRECTORY = f'{DIRECTORY}/img'

Handler = http.server.SimpleHTTPRequestHandler

if not exists(IMG_DIRECTORY):
    makedirs(IMG_DIRECTORY)


def is_dev_image(path: str) -> bool:
    return '/img/' in path or '.ico' in path


def local_dev_url_to_prod_url(path: str) -> str:
    return f'{PROD_URL}{path}'


class DevHandler(Handler):
    """
    An HTTP  Handler that serves files from DIRECTORY and fetches images from PROD_URL.
    """

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self) -> None:
        print(f'GET {self.path}')

        dev_file_path = f'{DIRECTORY}{self.path}'
        if not exists(dev_file_path) and is_dev_image(self.path):
            img_url_to_fetch = local_dev_url_to_prod_url(self.path)
            img_path_to_write = dev_file_path

            print(
                f'Fetching image from prod URL: {img_url_to_fetch} -> {img_path_to_write}')

            urllib.request.urlretrieve(
                img_url_to_fetch, img_path_to_write)

        return super().do_GET()


with socketserver.TCPServer(("", PORT), DevHandler) as httpd:
    print("serving at port", PORT)
    local_url = f'http://localhost:{PORT}'
    webbrowser.open(local_url, new=2)
    httpd.serve_forever()
