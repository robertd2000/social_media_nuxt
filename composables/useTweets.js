export default () => {
  const postTweet = (formData) => {
    const form = new FormData()

    form.append('text', formData.text)
    form.append('replyTo', formData.replyTo)

    formData.mediaFiles.forEach((mediaFile, index) => {
      form.append('media_file_' + index, mediaFile)
    })

    return useFetchApi('/api/user/tweets', {
      method: 'POST',
      body: form,
    })
  }

  const getHomeTweets = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchApi('/api/tweets', {
          method: 'GET',
        })
        resolve(response)
      } catch (error) {
        reject(error)
      }
    })
  }

  const getTweetById = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await useFetchApi(`/api/tweets/${id}`, {
          method: 'GET',
        })
        resolve(response)
      } catch (error) {
        reject(error)
      }
    })
  }

  return {
    postTweet,
    getHomeTweets,
    getTweetById,
  }
}
