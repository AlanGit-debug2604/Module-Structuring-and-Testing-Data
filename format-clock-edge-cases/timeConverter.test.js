import {formatAs12HourClock} from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function(){
    assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function() {
    assert.equal(formatAs12HourClock("08:00"), "8:00 am");
});

test("can correctly convert midnight time", function() {
    assert.equal(formatAs12HourClock("00:00"), "12:00 am");
});

test("can correctly convert single character hour morning time", function() {
    assert.equal(formatAs12HourClock("09:00"), "9:00 am");
});

test("can correctly convert dual characters hour morning time", function() {
    assert.equal(formatAs12HourClock("11:00"), "11:00 am");
});

test("can correctly convert noon time", function() {
    assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
});

test("can correctly shows minutes input", function() {
    assert.equal(formatAs12HourClock("16:59"), "4:59 pm");
});