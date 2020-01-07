import createLogger, { logger } from '../src/fp-pino-logger'

test('should create logger instance properly', () => {
  const instance = createLogger()
  instance.info({ name: 'rahul ballal'}, 'INFO')
  instance.debug({ name: 'Debugger'}, 'DEBUG')
  instance.error(new Error('Error has happened'))
  expect(instance).toBeTruthy()
  expect(instance).toHaveProperty('info')
})

test('instance should just work', () => {
  logger.info({ name: 'rahul ballal'}, 'INFO')
  logger.debug({ name: 'Debugger'}, 'DEBUG')
  logger.error(new Error('Error has happened'))
  expect(true).toBe(true)
})