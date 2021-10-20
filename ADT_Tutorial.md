# 1. [Azure Digital Twin](https://docs.microsoft.com/ja-jp/azure/digital-twins/overview)

## 1.1. Quick Start

### 1.1.1. 作業手順

1. Azure Digital Twins インスタンスを作成
2. ADT Explorer を起動
   - インスタンス内のデータをグラフィカルに表示。
3. 対象となる環境の語彙を定義する
   - カスタムモデルを作成し、実際の環境に存在するエンティティのタイプを記述
   - DTDL で記述
     - 各モデルで、_Property_, _Telemetry_, _Relationship_, _Component_ の観点から、1 種類のエンティティを記述する
4. サンプルデータを投入
   - 上記に従い、以下のデータを用意する
   - 以下の 3 つ ([digital-twins-explorer/client/examples at main · Azure-Samples/digital-twins-explorer](https://github.com/Azure-Samples/digital-twins-explorer/tree/main/client/examples) より)
     - Floor.json
     - Room.json
       - カスタムモデルを定義
       - id / type / displayname / context / contents から成る
       - contents 内に Relationship が記述されている
     - buildingScenario.xlsx
       - カスタムグラフを定義
       - id / Relationship / initail-data から成る

## 1.2. チュートリアル: Azure Digital Twins API を使⽤したコーディング

クライアントアプリケーションの SDK を使用して、インスタンスの API に接続する
ドキュメントでは .Net を用いているが、インストールが面倒なので [JS 版](https://www.npmjs.com/package/@azure/digital-twins-core) を使用する

### 1.2.1. 作業手順

1. インスタンスを作る
   - てきとー
2. プライベートアクセスの有効化
   - と思ったけどうまくいかなかったので中断
   - > リソースの種類 'Microsoft.DigitalTwins/digitalTwinsInstances' は、サポートされていないリソースの種類です
3. パッケージをインストール
   - DT-core のサンプルとは異なるが、認証は [@azure/identity - npm](https://www.npmjs.com/package/@azure/identity) を用いることにした (source: [Confused about @azure/ms-node-auth vs @azure/identity vs MSAL.js · Issue #12565 · Azure/azure-sdk-for-js](https://github.com/Azure/azure-sdk-for-js/issues/12565#issuecomment-732395103))
   - と思ったけど npm のドキュメントが更新されてないだけだった。レポジトリの Examples は identity 使ってたわ
4. 適当にコードをパクる
   - ADT は組み込みのドメイン語彙が提供されていないため、カスタムモデルは自分で用意する必要がある。
5. P.30 デジタルツインの作成
   - `BasicDigitalTwin` ってなんだ…？
