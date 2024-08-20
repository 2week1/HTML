function calculator() {
    const num1El = document.getElementById("num1");
    const num2El = document.getElementById("num2");
    const op = document.getElementById("op").value;

    const result = document.getElementById("result");

    const num1 = parseInt(num1El.value);    // 문자열을 정수값으로 바꿔줌
    const num2 = parseInt(num2El.value);
    let total = 0;
    switch(op) {
        case '+':
            total = num1 + num2;
            break;
        case '-':
            total = num1 - num2;
            break;
        case '*':
            total = num1 * num2;
            break;
        case '/':
            if (num2 == 0) {
                alert('0으로 나눌 수 없습니다. 다시 시도해주세요!');
                num2El.focus();         // 해당 요소에 커서가 간다.
                return;
            }
            total = num1 / num2;
            break;
        case '%':
            if (num2 == 0) {
                alert('0으로 나눌 수 없습니다. 다시 시도해주세요!');
                return;
            }
            total = num1 % num2;
            break;
    }

    result.value = total;
}