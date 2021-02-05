# 家庭記帳本

一個使用 Node.js + Express 打造的記帳網站，提供使用者管理自己的消費清單，如新增、修改、刪除、瀏覽消費資料及計算總消費金額等功能，並且可依消費類別分類呈現清單。

## 專案畫面

![image](https://github.com/Denniscc0303/Images/blob/master/2-3%20A12%20%E8%80%81%E7%88%B8%E7%9A%84%E7%A7%81%E6%88%BF%E9%8C%A2_index_Dennis_20210205.JPG)

![image](https://github.com/Denniscc0303/Images/blob/master/2-3%20A12%20%E8%80%81%E7%88%B8%E7%9A%84%E7%A7%81%E6%88%BF%E9%8C%A2_new_20210205.JPG)

![image](https://github.com/Denniscc0303/Images/blob/master/2-3%20A12%20%E8%80%81%E7%88%B8%E7%9A%84%E7%A7%81%E6%88%BF%E9%8C%A2_edit_20210205.JPG)

![image](https://github.com/Denniscc0303/Images/blob/master/2-3%20A12%20%E8%80%81%E7%88%B8%E7%9A%84%E7%A7%81%E6%88%BF%E9%8C%A2_filter_Dennis_20210205.JPG)

## Features - 產品功能

1. 使用者可以在首頁一次瀏覽所有支出的清單
2. 使用者可以在首頁看到所有支出清單的總金額
3. 使用者可以新增一筆支出
4. 使用者可以一次編輯一筆支出的所有屬性
5. 使用者可以一次刪除一筆支出
6. 使用者可以在首頁根據支出「類別」篩選支出；總金額的計算只會包括被篩選出來的支出總和

## Environment SetUp - 環境建置

1. Node.js : v10.15.0
2. Express : v4.17.1
3. Nodemon : v2.0.7
4. Express-handlebars : v5.2.0
5. Body-Parser : v1.19.0
6. Mongoose : v5.11.14
7. Method-override : v3.0.0

## Installing - 專案安裝流程

1. 打開你的 terminal，Clone 此專案至本機電腦

```
git clone https://github.com/Denniscc0303/expense-tracker.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd expense-tracker
```

3. 安裝 npm 套件

```
在 Terminal 輸入 npm install 指令
```

4. 匯入種子檔案

```
執行 npm run seed 匯入使用者與清單資料
```

當 terminal 出現以下字樣，即表示種子資料已新增至資料庫，按下 ctrl + c 結束執行

```
Mongodb connected!

done
```

5. 啟動伺服器，執行 app.js 檔案

```
node app.js
```

6. 當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
Express is listening on localhost:3000

mongodb connected!
```

現在，你可開啟任一瀏覽器瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 開始使用我的餐廳清單。

## Contributor - 專案開發人員

> [Dennis Chen](https://github.com/Denniscc0303)