const fetch = require('node-fetch')
const config = require('./config')
const { builder } = require('./url')

const routes = {
	sendMessage: '/bot<botId>/sendMessage'
}

const commonData = {
	parse_mode: 'MarkdownV2'
}

const post = (url, data) => {
	return fetch(url, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
}

module.exports.sendMessage = (chatId, message) => {
	const url = builder(routes.sendMessage, { botId: config.botId })
	return post(url, {
		chat_id: chatId,
		text: message,
		parse_mode: 'MarkdownV2'
	})
}