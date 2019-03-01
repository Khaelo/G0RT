module.exports = async(client) => {

    client.user.setPresence({
        game: {
            name: "G0RT - !help"
        }
    })
};