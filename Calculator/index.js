let input = ""
let currStr = ""

function updateInput() {
	let currInput = document.querySelector("#output")
	currInput.innerText = input
}

function findAnswer() {
	let answerArray = currStr.split(" ")
	let answer = parseFloat(answerArray[0])
	console.log(answerArray, answer)
	for (let i = 2; i < answerArray.length; i++) {
		switch (answerArray[i - 1]) {
			case "+":
				answer += parseFloat(answerArray[i])
				break
			case "-":
				answer -= parseFloat(answerArray[i])
				break
			case "*":
				answer *= parseFloat(answerArray[i])
				break
			case "/":
				answer /= parseFloat(answerArray[i])
				break
		}
	}
	console.log("After", answer)
	input = answer.toString()
	updateInput()
}

function actionBtn(action) {
	switch (action) {
		case "clear":
			input = ""
			currStr = ""
			updateInput()
			break
		case "=":
			currStr = currStr + input
			findAnswer()
			break
		case "+":
			currStr = currStr + input + " + "
			input = ""
			updateInput()
			break
		case "-":
			currStr = currStr + input + " - "
			input = ""
			updateInput()
			break
		case "*":
			currStr = currStr + input + " * "
			input = ""
			updateInput()
			break
		case "/":
			currStr = currStr + input + " / "
			input = ""
			updateInput()
			break
	}
}

function numBtn(num) {
	switch (num) {
		case 0:
			input = input + "0"
			break
		case 1:
			input = input + "1"
			break
		case 2:
			input = input + "2"
			break
		case 3:
			input = input + "3"
			break
		case 4:
			input = input + "4"
			break
		case 5:
			input = input + "5"
			break
		case 6:
			input = input + "6"
			break
		case 7:
			input = input + "7"
			break
		case 8:
			input = input + "8"
			break
		case 9:
			input = input + "9"
			break
		case ".":
			input = input + "."
			break
	}
	updateInput()
}
