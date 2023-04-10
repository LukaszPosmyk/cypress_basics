
const url200 = 'http://httpstat.us/200'
const url305 = 'http://httpstat.us/305'
const url404 = 'http://httpstat.us/404'
const url500 = 'http://httpstat.us/500'


class StatusCodesPage{

    checkStatusCode200(){
        cy.request(url200).then((response) => {
        const body = JSON.stringify(response.body)
        expect(response.body).to.eq('200 OK')
        })
    }

    checkStatusCode305(){
        cy.request({url: url305, followRedirect: false}).then((response) => {
        const body = JSON.stringify(response.body)            
        expect(response.body).to.eq('305 Use Proxy')
        })
    }


    checkStatusCode404(){
        cy.request({url: url404, failOnStatusCode: false}).then((response) => {
        const body = JSON.stringify(response.body)
        expect(response.status).to.eq(404)
        })
    }

    checkStatusCode500(){
        cy.request({url: url500, failOnStatusCode: false} ).then((response) => { 
        const body = JSON.stringify(response.body)
        expect(response.body).to.eq('500 Internal Server Error')
        })
    }

}
export default StatusCodesPage;