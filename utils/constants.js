// HTTP Status Codes
const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504
  };
  
  // Response Messages
  const RESPONSE_MESSAGES = {
    OK: 'Request was successful.',
    CREATED: 'Resource was successfully created.',
    ACCEPTED: 'Request has been accepted for processing.',
    NO_CONTENT: 'Request was successful but there is no content to send.',
    BAD_REQUEST: 'The request could not be understood or was missing required parameters.',
    UNAUTHORIZED: 'Authentication failed or user does not have permissions.',
    FORBIDDEN: 'Access is forbidden to the requested resource.',
    NOT_FOUND: 'The requested resource could not be found.',
    METHOD_NOT_ALLOWED: 'The HTTP method used is not allowed for this resource.',
    INTERNAL_SERVER_ERROR: 'An error occurred on the server.',
    NOT_IMPLEMENTED: 'The server does not support the functionality required to fulfill the request.',
    BAD_GATEWAY: 'The server received an invalid response from the upstream server.',
    SERVICE_UNAVAILABLE: 'The server is currently unable to handle the request due to a temporary overload or maintenance.',
    GATEWAY_TIMEOUT: 'The server did not receive a timely response from the upstream server or some other auxiliary server it needed to access in order to complete the request.'
  };
  
  module.exports = {
    HTTP_STATUS,
    RESPONSE_MESSAGES
  };
  