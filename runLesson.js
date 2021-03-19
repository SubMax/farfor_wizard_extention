function setBorderForSelector(selector) {
    document.querySelector(selector).style.outline = "3px dotted red"
}

function runLesson(lesson) {
    console.log(lesson);
    const {selectors} = lesson
    for (const selector of selectors) {
        setBorderForSelector(selector)
    }
}

(function () {
    const lessons = [
        {
            name: 'Создать заказ',
            text: 'Lesson 1...',
            selectors: ['#button-1125'],
        }
    ]
    runLesson(lessons[0])
}())
