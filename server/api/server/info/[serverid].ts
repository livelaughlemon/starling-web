export default defineEventHandler((event) => {
    const serverid = parseInt(event.context.params.serverid) as number
    if (!Number.isInteger(serverid)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Server ID should be an integer',
        })
    }
    // check if user is real
    // check if user has permission
    if (serverid === 0) {
        return {
            statusCode: 200,
            statusMessage: 'Success',
            // real important api response -- this is filler data while i work out the frontend
            name: 'Example Server',
            id: 0,
            owner: '1',
            moderators: ['2','3','4','5','6']
        }
    } else {
        throw createError({
            statusCode: 404,
            statusMessage: 'A server by this id could not be found',
        })
    }
})