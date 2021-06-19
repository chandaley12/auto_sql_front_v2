import {GetUserAccessToken} from 'Functions'
export async function CreateErd(_erdName)
{
    let axios = require('axios')

    let data = {
        name:  _erdName,
    }

    return await axios.post(process.env.REACT_APP_SERVER + "erd",
        JSON.stringify(data),
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': GetUserAccessToken(),
            }
        }
    )
        .then((response) => {
            console.log("CreateErd - then")
            console.log(response)
            return response.data.result
        })
        .catch((error) => {
            console.log("CreateErd - error")
            console.log(error)
        })
};
export async function GetErdList()
{
    let axios = require('axios')

    return await axios.get(process.env.REACT_APP_SERVER + "erd/list",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': GetUserAccessToken(),
            },
            maxContentLength: 100000000,
            maxBodyLength: 1000000000
        }
    )
}
export async function GetErdTimeLine(_erdName, _owner_id = "")
{
    let axios = require('axios')
    return await axios.get(process.env.REACT_APP_SERVER + 'commit/' + _erdName + "/" + _owner_id,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': GetUserAccessToken(),
            },
            maxContentLength: 100000000,
            maxBodyLength: 1000000000
        }
    )
}
export async function GetErd(_erdId, _commitId)
{
    let axios = require('axios')

    return await axios.get(process.env.REACT_APP_SERVER + 'erd/' + _erdId + '/' + _commitId,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': GetUserAccessToken(),
            },
            maxContentLength: 100000000,
            maxBodyLength: 1000000000
        }
    )
}
export async function GetErdForce(_erdId)
{
    let axios = require('axios')

    return await axios.get(process.env.REACT_APP_SERVER + 'erd/' + _erdId + '/force',
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': GetUserAccessToken(),
            },
            maxContentLength: 100000000,
            maxBodyLength: 1000000000
        }
    )
}
export async function SaveErd(_erdName, _data, _owner_id)
{
    let axios = require('axios')
    console.log("asdasdasdassd")
    console.log(_owner_id)
    let data = {
        data: _data,
        owner_id: _owner_id
    }
    let token = await GetUserAccessToken();
    let response = await axios.post(process.env.REACT_APP_SERVER + 'commit/' + _erdName,
        JSON.stringify(data),
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': token,
            },
            maxContentLength: 100000000,
            maxBodyLength: 1000000000
        }
    );
    return response
}