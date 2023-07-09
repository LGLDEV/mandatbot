const { log } = require('node:console');
const {getHtml} = require('./modules/getHtml')

const short = async (id) => {
    const $ = await getHtml(`https://mandat.uzbmb.uz/Home2022/AfterFilter?name=${id}&region=0`);
    const err = $('tbody').children('tr').last().children('td').children('h5').text()
    if (!err) {
        const data = {
            id: $('.table-danger').children('td').first().text(),
            name: $('.table-danger').children('td').first().next().text(),
            faculty: $('.table-danger').children('td').first().next().next().text(),
            univer: $('.table-danger').children('td').first().next().next().next().text(),
            ball: $('.table-danger').children('td').first().next().next().next().next().text(),
            lang: $('.table-danger').children('td').first().next().next().next().next().next().text(),
            type: $('.table-danger').children('td').first().next().next().next().next().next().next().text(),
        }
        return data;
    } else {
        return { error: err }
    }

}

const getInden = async (id) => {
    const $ = await getHtml(`https://mandat.uzbmb.uz/Home2022/AfterFilter?name=${id}&region=0`);
    const err = $('tbody').children('tr').last().children('td').children('h5').text()

    if (!err) {
        return $('.btn-info').attr('href').split('/')[3]
    } else {
        return { error: err }
    }
}

const long = async (inden) => {
    const $ = await getHtml(`https://mandat.uzbmb.uz/Home2022/Details/${inden}`);
    if ($('u').first().text()=="umumiy tanlovda ham ishtirok etishlari mumkin bo'ladi.") {
        console.log();
        return { error: "Malumot topilmadi" }
    } else {
        const tab = $('#mytab').children('tbody').children('tr');
        const result = {
            info: {
                id: $('u').first().text(),
                name: $('strong').first().text(),
                lang: $('u').last().text(),
                ball: $('.card-title').children('b').text().split(' ')[3]
            },
            data: [
                {
                    title: tab.first().children('td').first().text(),
                    univer: tab.first().children('td').first().next().text(),
                    faculty: tab.first().children('td').first().next().next().text(),
                    type: tab.first().children('td').first().next().next().next().text(),
                    hash: tab.first().children('td').first().next().next().next().next().text(),
                    admissionPlan: {
                        grant: tab.first().children('td').first().next().next().next().next().next().text(),
                        contract: tab.first().children('td').first().next().next().next().next().next().next().text(),
                    },
                    passingScore: {
                        grant: tab.first().children('td').first().next().next().next().next().next().next().next().text(),
                        contract: tab.first().children('td').first().next().next().next().next().next().next().next().next().text(),
                    },
                },
                {
                    title: tab.first().next().children('td').first().text(),
                    univer: tab.first().next().children('td').first().next().text(),
                    faculty: tab.first().next().children('td').first().next().next().text(),
                    type: tab.first().next().children('td').first().next().next().next().text(),
                    hash: tab.first().next().children('td').first().next().next().next().next().text(),
                    admissionPlan: {
                        grant: tab.first().next().children('td').first().next().next().next().next().next().text(),
                        contract: tab.first().next().children('td').first().next().next().next().next().next().next().text(),
                    },
                    passingScore: {
                        grant: tab.first().next().children('td').first().next().next().next().next().next().next().next().text(),
                        contract: tab.first().next().children('td').first().next().next().next().next().next().next().next().next().text(),
                    },
                },
                {
                    title: tab.first().next().next().children('td').first().text(),
                    univer: tab.first().next().next().children('td').first().next().text(),
                    faculty: tab.first().next().next().children('td').first().next().next().text(),
                    type: tab.first().next().next().children('td').first().next().next().next().text(),
                    hash: tab.first().next().next().children('td').first().next().next().next().next().text(),
                    admissionPlan: {
                        grant: tab.first().next().next().children('td').first().next().next().next().next().next().text(),
                        contract: tab.first().next().next().children('td').first().next().next().next().next().next().next().text(),
                    },
                    passingScore: {
                        grant: tab.first().next().next().children('td').first().next().next().next().next().next().next().next().text(),
                        contract: tab.first().next().next().children('td').first().next().next().next().next().next().next().next().next().text(),
                    },
                },
                {
                    title: tab.first().next().next().next().children('td').first().text(),
                    univer: tab.first().next().next().next().children('td').first().next().text(),
                    faculty: tab.first().next().next().next().children('td').first().next().next().text(),
                    type: tab.first().next().next().next().children('td').first().next().next().next().text(),
                    hash: tab.first().next().next().next().children('td').first().next().next().next().next().text(),
                    admissionPlan: {
                        grant: tab.first().next().next().next().children('td').first().next().next().next().next().next().text(),
                        contract: tab.first().next().next().next().children('td').first().next().next().next().next().next().next().text(),
                    },
                    passingScore: {
                        grant: tab.first().next().next().next().children('td').first().next().next().next().next().next().next().next().text(),
                        contract: tab.first().next().next().next().children('td').first().next().next().next().next().next().next().next().next().text(),
                    },
                },
                {
                    title: tab.first().next().next().next().next().children('td').first().text(),
                    univer: tab.first().next().next().next().next().children('td').first().next().text(),
                    faculty: tab.first().next().next().next().next().children('td').first().next().next().text(),
                    type: tab.first().next().next().next().next().children('td').first().next().next().next().text(),
                    hash: tab.first().next().next().next().next().children('td').first().next().next().next().next().text(),
                    admissionPlan: {
                        grant: tab.first().next().next().next().next().children('td').first().next().next().next().next().next().text(),
                        contract: tab.first().next().next().next().next().children('td').first().next().next().next().next().next().next().text(),
                    },
                    passingScore: {
                        grant: tab.first().next().next().next().next().children('td').first().next().next().next().next().next().next().next().text(),
                        contract: tab.first().next().next().next().next().children('td').first().next().next().next().next().next().next().next().next().text(),
                    },
                },
            ]
        }

        return result
    }



}


module.exports = {
    long, short, getInden
}