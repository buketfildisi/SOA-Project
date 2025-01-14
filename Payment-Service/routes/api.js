const express = require("express");

const { body } = require("express-validator");

const { postPayment } = require("../controllers/api");

const router = express.Router();

router.post(
  "/create-payment-intent",
  [
    body("amount").notEmpty().isNumeric().withMessage("Amount is required"),
    // body("author").notEmpty().withMessage("Author is required"),
    body("orderId").notEmpty().isNumeric().withMessage("Order Id is required"),
    body("userId").notEmpty().isNumeric().withMessage("User Id is required"),


  ],
  postPayment
);


module.exports = router;
