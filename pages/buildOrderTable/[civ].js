import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { civ } = router.query

  return <p>Civ: {civ}</p>
}

export default Post
