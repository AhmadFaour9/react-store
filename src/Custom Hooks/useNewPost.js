const useNewPost = (endPoint,body) => {
    const handleClick = () => {
        endPoint(body)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return [handleClick]
}

export default useNewPost