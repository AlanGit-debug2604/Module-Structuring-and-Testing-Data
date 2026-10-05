import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function () {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function () {
  assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("can correctly convert midnight time", function () {
  assert.equal(formatAs12HourClock("00:00"), "12:00 am");
});

test("can correctly convert single character hour morning time", function () {
  assert.equal(formatAs12HourClock("09:00"), "09:00 am");
});

test("can correctly convert dual characters hour morning time", function () {
  assert.equal(formatAs12HourClock("11:00"), "11:00 am");
});

test("can correctly convert noon time", function () {
  assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
});

test("can correctly convert to single character afternoon time", function () {
  assert.equal(formatAs12HourClock("16:00"), "04:00 pm");
});

test("can correctly keep pm in first hour after noon", function () {
  assert.equal(formatAs12HourClock("13:00"), "01:00 pm");
});

test("can correctly shows minutes input", function () {
  assert.equal(formatAs12HourClock("13:30"), "01:30 pm");
});

test("can correctly keep am in last minute of morning", function () {
  assert.equal(formatAs12HourClock("11:59"), "11:59 am");
});

test("can correctly keep pm in last minute of the day", function () {
  assert.equal(formatAs12HourClock("23:59"), "11:59 pm");
});

test("can correctly keep am in first minute of the day", function () {
  assert.equal(formatAs12HourClock("00:01"), "12:01 am");
});

test("can correctly keep pm in first minute after noon", function () {
  assert.equal(formatAs12HourClock("12:01"), "12:01 pm");
});
