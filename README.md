# Oracle Digital Assistant: Webhook Client Sample

Oracle Digital Assistant の Webhook チャネルのを使用するための Webhook クライアントのサンプル。

## このサンプルのエンドポイント

* POST `/bot/send`

  - ポストされたメッセージを Oracle Digital Assistant の Webhook URL にメッセージを転送

  - メッセージの形式:

    ```JSON
    {
      "user": "ユーザー名",
      "text": "Digital Assistant に送信するテキスト"
    }
    ```

* POST `/bot/receive`

  - Webhook チャネルからボットからのレスポンスを受信するためのエンドポイント

  - Webhook チャネルの **Outgoing Webhook URI** に `https://<hostname>/bot/receive` を指定

## 使用方法

1. Webhook チャネルを作成
1. 作成した Webhook の **Webhook URL** の値を環境変数 `BOT_WEBHOOK_URL` に設定
1. 作成した Webhook の **Secret Key** の値を環境変数 `BOT_WEBHOOK_SECRET` に設定
1. Webhook Client がリスニングするポート番号の値を環境変数 `PORT` に設定

**Webhook URL** および **Secret Key** 、Webhook Client がリスニングするポート番号の値は、環境変数に設定する代わりに `.env` ファイルを記述することも可能（`.env_sample` をコピーして値を編集）。
