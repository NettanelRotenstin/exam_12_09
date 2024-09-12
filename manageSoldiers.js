const addSoldier = document.querySelector(".btn-add-soldier")


const table = document.querySelector(".table-add")

const remove = document.querySelector(".remove")

const arrInputs = document.querySelectorAll(".div-input input,select")

const [inpName, inpRank, inpPosition, inpPlatoon, inpTime, inpStatus] = arrInputs

const inputs = document.querySelector(".div-input")

const edit = document.querySelector(".edit-btn")

const mainPage = document.querySelector(`.main-page`)

const editPage = document.querySelector(`.edit-page`)

function addSoldierFunc() {
    const obj = JSON.parse(localStorage.soldiers || [])
    obj.push({ name: inpName.value, rank: inpRank.value, position: inpPosition.value, platoon: inpPlatoon.value, time: inpTime.value, status: inpStatus.value })
    localStorage.soldiers = JSON.stringify(obj)

    loadFromLocalStorage()
}

addSoldier.addEventListener(`click`, addSoldierFunc)

function loadFromLocalStorage() {
    let obj = JSON.parse(localStorage.soldiers || `[]`)
    for (let index = 0; index < obj.length; index++) {
        table.innerHTML = ``

        const tr = document.createElement(`tr`)
        tr.classList.add(`tr-to-add`)

        const tdName = document.createElement(`td`)
        tdName.textContent = obj[index].name

        const tdRank = document.createElement(`td`)
        tdRank.textContent = obj[index].rank

        const tdPosition = document.createElement(`td`)
        tdPosition.textContent = obj[index].position

        const tdPlatoon = document.createElement(`td`)
        tdPlatoon.textContent = obj[index].platoon

        const tdStatus = document.createElement(`td`)
        tdStatus.textContent = obj[index].status

        const tdAction = document.createElement(`td`)
        tdAction.classList.add(`action-table`)

        const btnRemove = document.createElement(`button`)
        btnRemove.textContent = `Remove`
        btnRemove.classList.add(`remove`)

        const btnMission = document.createElement(`button`)
        btnMission.textContent = `Mission`

        const btnEdit = document.createElement(`button`)
        btnEdit.textContent = `Edit`
        btnEdit.classList.add(`edit-btn`)

        tdAction.append(btnRemove, btnMission, btnEdit)
        console.log(tdName, tdRank, tdPosition, tdPlatoon, tdStatus, tdAction);

        tr.append(tdName, tdRank, tdPosition, tdPlatoon, tdStatus, tdAction)

        table.appendChild(tr)
    }
}


remove.addEventListener(`click`, e => {
    const obj = JSON.parse(localStorage.soldiers || `[]`)
    const filterArr = obj.filter(x => e.target.name !== x.name)
    localStorage.soldiers = JSON.stringify(filterArr)

    loadFromLocalStorage()
})



edit.addEventListener(`click`, changePage) 

function changePage()
{
    mainPage.style.display = `none`
    editPage.style.display = `flex`
}


