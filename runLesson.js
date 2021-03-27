// let stepTextContainer

function setStep(element, text) {
    element.style.outline = "3px solid red"
    // stepTextContainer.innerText = text
}

function restoreStep(element, savedStyle) {
    element.style.outline = savedStyle
    // stepTextContainer.innerText = ''
}

function createPanel() {
    const panelElement = document.createElement('div')
    panelElement.innerHTML = `
    <div class="container" style="position: absolute;z-index: 99999;left: 50%;bottom:40px;width: 300px;height: 120px;display: flex;flex-flow: column nowrap;justify-content: center;align-items: center;border: 6px black solid;background-color: #f95002;color: white;">
      <h1 style="margin: 0;margin-bottom: 12px;">Урок</h1>
      <div class="stepTextContainer"></div>
      <div class="arrows" style="margin: 0;font-size: 3em;">
        <span id="next-step" style="margin: 0;cursor: pointer">&#9755;</span>
      </div>
    </div>
`
    return panelElement
}

function insertPanel() {
    const panel = createPanel()
    document.body.appendChild(panel)
}

function* iterateSteps(steps) {
    for (const {text, selector} of steps) {
        const element = document.querySelector(selector)
        const initialStyle = element.style.outline
        yield setStep(element, text)
        restoreStep(element, initialStyle)

    }
}

(function () {
    const lessons = [
        {
            name: 'Создать заказ',
            steps: [
                {
                    text: 'Во вкладке "Заказы"/"Текущие заказы"',
                    selector: '#tab-1777'
                },
                {
                    text: 'afafaf',
                    selector: '#gridview-1431-body tr'
                }
            ]
        }
    ]
    insertPanel()
    // stepTextContainer = document.querySelector('#stepTextContainer')
    const [lesson] = lessons
    let stepsIterator = iterateSteps(lesson.steps)
    document.querySelector('#next-step').addEventListener('click', () => {
        stepsIterator.next()
    })

    stepsIterator.next()
}())
