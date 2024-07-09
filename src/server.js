const express = require("express");
const app = express();
const port = 8081;
const connectDb = require("./config/connectDb");
const initRouter = require("./routes/web");

// Đặt các middleware trước khi khởi tạo router và kết nối cơ sở dữ liệu
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Khởi tạo router
initRouter(app);

// Kết nối cơ sở dữ liệu
connectDb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
