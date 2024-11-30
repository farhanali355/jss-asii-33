
let a = 5;

let exp1 = ((4 + 5) && "abc" || false + "test") * (a-- || --a) || (false && (++a + 1)) * "end";
// ((4 + 5) = 9, 9 && "abc" = "abc", "abc" || "test" = "abc", (a-- = 5) || (--a = 3) = 5, "abc" * 5 = NaN, final result NaN)

let exp2 = 10 * ("foo" && 5 + (++a) || "bar") && (false + "test") || 0 && true;
// "foo" && 5 + (++a = 6) = 11, 10 * 11 = 110, (false + "test") = "test", 110 && "test" = "test", 0 && true = 0, final result "test"

let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";
// (a-- = 6) || "start" = 6, 6 * 4 = 24, --a = 4, 4 + "value" = "4value", (1 + 2) = 3, "4value" * 3 = NaN, 24 && NaN = NaN, 3 + NaN + "result" = "NaNresult"

let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;
// ++a = 5, "hello" * 6 = NaN, (2 + 3 * "abc") = NaN, NaN * 1 = NaN, NaN + "xyz" = "NaNxyz", "NaNxyz" && 0 = 0, final result 0

let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
// true  = true, true  = true, final result true

let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
// ++a = 6, "6abc" && (4 * 2 + 3 = 11) = 11, 11 || (0 + 1) = 11, final result 11

let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result"; 

// "foo5" * 7 = NaN, 9, "result"final result 9