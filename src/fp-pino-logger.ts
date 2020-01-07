import pino from 'pino'

type Logger = Pick<pino.BaseLogger,'info'|'debug'|'error'|'trace'|'warn'|'child'>

function createLogger(): Logger {
  const _logger = pino({
    level: process.env.LOG_LEVEL || 'info'
  })

  const info = _logger.info.bind(_logger)
  const error = _logger.error.bind(_logger)
  const debug = _logger.debug.bind(_logger)
  const trace = _logger.trace.bind(_logger)
  const warn = _logger.warn.bind(_logger)
  const child = _logger.child.bind(_logger)

  return {
    info,
    debug,
    error,
    trace,
    warn,
    child,
  }
}

export default createLogger

export const logger = createLogger()