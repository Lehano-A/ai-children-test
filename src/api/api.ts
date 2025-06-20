import type { Survey } from '../components/sections/SurveySection/SurveySection.types'

class Api {
  baseUrl: string

  constructor() {
    this.baseUrl = 'https://sirius-draw-test-94500a1b4a2f.herokuapp.com'
  }

  uploadImages = (formData: FormData) => {
    return fetch(`${this.baseUrl}/upload`, {
      method: 'POST',
      body: formData,
    }).then((res) => {
      return this._getResponse(res)
    })
  }

  sendSurvey = (data: Survey) => {
    return fetch(`${this.baseUrl}/submit-survey`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/JSON' },

      body: JSON.stringify(data),
    }).then((res) => {
      return this._getResponse(res)
    })
  }

  getStatusResultTest = (task_id: string) => {
    return fetch(`${this.baseUrl}/report/${task_id}`).then((res) => {
      return this._getResponse(res)
    })
  }

  async _getResponse(res: Response) {
    if (!res.ok) {
      const message = await res.json()

      throw new Error(message.detail)
    }

    return res.json()
  }
}
const api = new Api()

export default api
