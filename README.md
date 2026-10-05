# AccountingDeployPoc.Frontend

會計系統前端專案。

技術：

- React
- TypeScript
- Vite
- Tailwind CSS

---

## 第一次啟動

### 1. 安裝 Node.js

請先確認電腦已安裝 Node.js。

在 Command Prompt / PowerShell 輸入：

```bash
node -v
```

如果有出現版本號，例如：

```text
v22.x.x
```

代表 Node.js 已安裝。

如果找不到 `node` 指令，請先安裝 Node.js LTS 版本。

---

### 2. 下載專案

如果尚未下載：

```bash
git clone https://github.com/vc428803/AccountingDeployPoc.Frontend.git
```

進入專案資料夾：

```bash
cd AccountingDeployPoc.Frontend
```

---

### 3. 安裝套件

第一次啟動，或 `package.json / package-lock.json` 有更新時執行：

```bash
npm ci
```

安裝完成後會產生：

```text
node_modules
```

資料夾。

---

### 4. 啟動前端

執行：

```bash
npm run dev
```

成功後 Terminal 會顯示類似：

```text
VITE ready

Local: http://localhost:5173/
```

使用瀏覽器開啟：

```text
http://localhost:5173
```

即可進入系統。

---

# 之後重新啟動

如果套件已經安裝過，平常重新開啟系統只需要：

```bash
cd AccountingDeployPoc.Frontend
npm run dev
```

然後開啟：

```text
http://localhost:5173
```

---

# 停止系統

在執行 `npm run dev` 的 Terminal 視窗中按：

```text
Ctrl + C
```

即可停止前端。

---

# 如果程式有更新

先取得最新版本：

```bash
git pull
```

如果只是一般程式碼更新，可以直接重新啟動：

```bash
npm run dev
```

如果 `package.json` 或 `package-lock.json` 有變更，建議重新執行：

```bash
npm ci
npm run dev
```

---

# 常見問題

## `npm` 不是內部或外部命令

代表 Node.js 尚未安裝，或安裝後尚未重新開啟 Terminal。

請安裝 Node.js LTS 後重新開啟 Command Prompt / PowerShell。

---

## 5173 Port 已被使用

如果 Terminal 顯示其他網址，例如：

```text
http://localhost:5174
```

請直接使用 Terminal 顯示的網址。

---

## 頁面無法正常取得後端資料

前端可以成功啟動，不代表後端 API 已經啟動。

如果畫面可以打開，但登入、查詢或其他資料功能無法使用，請另外確認 Accounting System Backend API 是否正常運作。

---

## 快速啟動

已經安裝過環境的情況下：

```bash
git pull
npm ci
npm run dev
```

看到：

```text
Local: http://localhost:5173/
```

後，以瀏覽器開啟該網址即可。