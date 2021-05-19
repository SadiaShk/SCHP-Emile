import config from './config'


export const checkConfig = () => {
    if (config.url === "" || config.consumerKey === "" || config.consumerSecret === "" || config.consumerKey === undefined || config.consumerSecret === undefined) {
        return false
    } else {
        return true
    }
}
export default WC = {
    post: (endpoint, data, success, error) => {
        console.log('post ', data)
        if (checkConfig()) {
            // let url = config.url + "wp-json/wc/v3/" + endpoint + "?consumer_key=" + config.consumerKey + "&consumer_secret=" + config.consumerSecret + "&oauth_signature=" + config.auth
            let url = config.url + "wp-json/wc/v3/" + endpoint + "?consumer_key=" + config.consumerKey + "&consumer_secret=" + config.consumerSecret

            console.log("uri ",url);
           
            let body = JSON.stringify(data)
            let header = {
                "Content-Type": "application/json",
            //    "Authorization": 'Basic ' + config.key
            }
            let requestConfig = {
                method: "POST",
                headers: new Headers(header),
                body: body
            }
            // console.log('requesting with config', requestConfig)
            fetch(url, requestConfig)
                .then(d => {
                    d.json()
                        .then(
                            data => {
                                if (data.status === "error") {
                                    // console.log('in error', data);

                                    error(data)
                                } else {
                                    // console.log('in success', data);
                                    success(data)
                                }
                            }
                        )
                })
                .catch(e => {
                    error(e)
                })
        } else {
            // console.log('Missing config')
            return
        }

    },
    get: (endpoint, params, success, error) => {
        if (checkConfig()) {
            let parameter = ""
            Object.entries(params).forEach(
                ([key, value]) => {
                    let val = "&" + key + "=" + value
                    let prev = parameter
                    parameter = prev + val
                }
            )
            let url = config.url + 'wp-json/wc/v3/' + endpoint + '?consumer_key=' + config.consumerKey + '&consumer_secret=' + config.consumerSecret + parameter
            console.log('api'+ url)
            let header = {
                Authorization: 'Basic ' + config.key
            }
            fetch(url, {
                method: 'GET',
                headers: new Headers(header)
            })
                .then(d => {
                    d.json()
                        .then(
                            data => {
                                console.log(data)
                                if (data.status === "error") {
                                    error(data)
                                } else {
                                    success(data)
                                }
                            }
                        ).catch(e => {
                            // console.log(e);

                            error('something went wrong')
            console.log('Missing config', e)

                        })
                })
                .catch(e => {
                    error(e)
            console.log('Missing config', e)

                })
        } else {
            console.log('Missing config')
            return
        }
    },
    auth: (credentials, success, error) => {
        if (checkConfig()) {
            if (credentials) {
                // console.log('check',credentials)
                if (!credentials.email) {
                     console.log('Email required', credentials)
                    return
                }
                if (!credentials.password) {
                     console.log('password required', credentials)
                    return
                }
                let url = config.url + "api/auth/generate_auth_cookie/?insecure=cool&username=" + credentials.email + "&password=" + credentials.password
                fetch(url)
                    .then(data => {
                        data.json()
                            .then(
                                d => {
                                    success(d)
                                })
                            .catch(e => {
                                error(e)
                            })
                    }).catch(e => {
                        error(e)
                    })
            } else {
                // console.log('missing configuration object with username and password')
                return
            }
        }
    },
    customApi: (endpoint, data, success, error) => {
        if (checkConfig()) {
            if (data) {
                let url = config.url + endpoint
                let h = {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache"
                }
                let headers = new Headers(h)
                fetch(url, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(data)
                })
                    .then(
                        res => {
                            res.json()
                                .then(
                                    d => {
                                        if (d.status === 1) {
                                            success(d)
                                        } else {
                                            error(d)
                                        }
                                    }
                                )
                                .catch(e => {
                                    error(e)
                                })
                        }
                    )
            } else {
                // console.log('missing configuration object with username and password')
                return
            }
        }
    },
    customPostApi: (endpoint, data, success, error) => {
       // console.log('post ', data)
       if (checkConfig()) {
        // let url = config.url + "wp-json/wc/v3/" + endpoint + "?consumer_key=" + config.consumerKey + "&consumer_secret=" + config.consumerSecret + "&oauth_signature=" + config.auth
        let url = config.url + "wp-json/custom/v1/" + endpoint

        console.log("uri ",url);
       
        let body = JSON.stringify(data)
        let header = {
            "Content-Type": "application/json",
           // "Authorization": 'Basic ' + config.key
        }
        let requestConfig = {
            method: "POST",
            headers: new Headers(header),
            body: body
        }
        // console.log('requesting with config', requestConfig)
        fetch(url, requestConfig)
            .then(d => {
                d.json()
                    .then(
                        data => {
                            if (data.status === "error") {
                                // console.log('in error', data);

                                error(data)
                            } else {
                                // console.log('in success', data);
                                success(data)
                            }
                        }
                    )
            })
            .catch(e => {
                error(e)
            })
    } else {
        // console.log('Missing config')
        return
    }

},
customContactApi: (endpoint, data, success, error) => {
    // console.log('post ', data)
    if (checkConfig()) {
     // let url = config.url + "wp-json/wc/v3/" + endpoint + "?consumer_key=" + config.consumerKey + "&consumer_secret=" + config.consumerSecret + "&oauth_signature=" + config.auth
     let url = config.url + "wp-json/api/v1/" + endpoint

     console.log("uri ",url);
    
     let body = JSON.stringify(data)
     let header = {
         "Content-Type": "application/json",
        // "Authorization": 'Basic ' + config.key
     }
     let requestConfig = {
         method: "POST",
         headers: new Headers(header),
         body: body
     }
     // console.log('requesting with config', requestConfig)
     fetch(url, requestConfig)
         .then(d => {
             d.json()
                 .then(
                     data => {
                         if (data.status === "error") {
                             // console.log('in error', data);

                             error(data)
                         } else {
                             // console.log('in success', data);
                             success(data)
                         }
                     }
                 )
         })
         .catch(e => {
             error(e)
         })
 } else {
     // console.log('Missing config')
     return
 }

},
    customGetApi: (endpoint, params, success, error) => {
        if (checkConfig()) {
            let parameter = ""
            Object.entries(params).forEach(
                ([key, value]) => {
                    let val = "&" + key + "=" + value
                    let prev = parameter
                    parameter = prev + val
                }
            )
            let url = config.url + 'wp-json/custom/v1/' + endpoint + '?consumer_key=' + config.consumerKey + '&consumer_secret=' + config.consumerSecret + parameter
            console.log('api'+ url)
            let header = {
                Authorization: 'Basic ' + config.key
            }
            fetch(url, {
                method: 'GET',
                headers: new Headers(header)
            })
                .then(d => {
                    d.json()
                        .then(
                            data => {
                                console.log(data)
                                if (data.status === "error") {
                                    error(data)
                                } else {
                                    success(data)
                                }
                            }
                        ).catch(e => {
                            // console.log(e);

                            error('something went wrong')
            console.log('Missing config', e)

                        })
                })
                .catch(e => {
                    error(e)
            console.log('Missing config', e)

                })
        } else {
            console.log('Missing config')
            return
        }
    },
    // customGet: (endpoint, success, error) => {
    //     if (checkConfig()) {
    //         let url = config.url + endpoint
    //         fetch(url)
    //             .then(
    //                 res => {
    //                     res.json()
    //                         .then(
    //                             d => {
    //                                 // console.log(d)
    //                                 success(d)
    //                             }
    //                         )
    //                         .catch(e => {
    //                             error(e)
    //                         })
    //                 }
    //             )

    //     }
    // }
}