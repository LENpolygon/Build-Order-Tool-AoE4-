import * as admin from 'firebase-admin'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      "project_id": "aoe4-build-order",
      "client_email": "firebase-adminsdk-s054m@aoe4-build-order.iam.gserviceaccount.com",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCvdIHaebfdmk64\nzSSPQr56+uDBedanL0dzclhGUBn/OGd0T5wzXAJ+4x2SurrJK+ss5fnkDXokHVmL\n+w0YvETHZZK3AaF1p3tOWKRTfxFVtWbvhulc04ZC+sHkBdK1nlGux14Vtt5ga3yr\nFD89RYtx/6lmCD38piCj+uLP2w/mW8Z7xywBFzQm7p1YKWjs1j7DWo5HcXZ98tf8\njwBEyi9pAJzF29/5L2EV6RUthPgE5ygJZiIj5FTAIN4x6gIXOy50O1kMDu0nzPal\nU/eCYCP9f045Uj+JjJXqmq7EWTPXrpKaoZLCpg/86amxDejbKYX0/VgoBky7IvkN\nozp7ReqlAgMBAAECggEAIHiSpp0DpOivnH5kv3ml+GsRKOVUTz0N/2TgRuUApq3o\n4YrxOMUUtihwmuzhcCUnYTgPkv/WhLQE1EXqQtNm9DMNX76Ww8gy5wk7IjPAQMkx\na29fpV0FOkSfmQRl3lRWQB8n/6NIDPafjCbTXFLQT5D16Arq8+TH4ikmjDq5utMe\nxAbEBt2z6HdSewFqk4OX3BPWQz3HN1HxRZBNY+3QKlWGc90eCh05zkLNmDI9gv1G\nR3FMaMm+ToLcvZ7mr9dB1MVCpxWCK7h5/zeCjmC2Dgr51e8BqomiRjhSf5etA5Fu\nRxueiNxbIqJouBfbmAHll50yhoT/ffsKzT4E7da14QKBgQDvitpOxFxbgSq24dq4\n8DEAfqY8GtzHcN76VbrwIum27/K7WatV7fMiiG+mcrN9+ZhMbpgY/eZZS0Nhlk3A\nfOeWeZaEct/dhY6KkR/t+p23QEErS9IB1Wtkf080eBdKacVrmyduToImw9nZozlF\nNSbFRDNwt2GmST9CsmToih/AoQKBgQC7gnePxwnSie5TgP6yKZFhCdE8Sjl7XRG+\nHiz1+zceGx/mV8XC+DJUweFjDsOIAGPGPBSwWD00tXQ0o5ipXqMx0juakCLZw6G9\nw4L0kXqUEQf1KM3VRBEieoFtdMYR/dmpw8ilevyKoJsa97FzPMhaaAxcg+hwn2/6\nNYIUgLx3hQKBgGB0I8V1sc6yqxVqyhyPstuFI8Ct/Fpea5qXbKeHF16vLakcyS3X\nm4A7OeHm67l9CEM2gQ4HJnqsIJyp3fL1GHdxzBbW/qd/QM8w8o9ry5ffSp55cD2G\nxzB3RthUxuQSxQi4N99lw2iCkjTdUZE5frwN4zyuyqYfdlaP6Kvt+i0hAoGAKpZ+\nW1yEoZoMVFD3CDYiu9yD9mKRXbCMyBaIdbICGcdlXmbPFvJSVCfY7iu7Q1d7Udnx\nhP/1ntQbuZzynn1NKZKrUPatw7IIOVZ/lta39YtMuGT1IxwbnC4g2WBtYEa8ui8q\nklM1qrLBp8VcO2UxyD7bl+Op1nKP909R5SA8LhUCgYEAunAmddrZ5CbEIbTaObuc\nkNtf/smZtPeTzA2O1bO9/b3HNX2qBud/0TK76eIZTVWqqg7An9TCPti1f5LwDsRy\nQcWBEtWrEGqp2ORaD+F0flW1htQP9GV0g8ZglIzuASR9qCrBJB/Tghd3fx1pO26n\n1opfKpjhfi9wBF3gBa+UKSs=\n-----END PRIVATE KEY-----\n",
    }),
  })
}

export default admin
