exports.handler = async (event) => {
  const SAVE_URL = 'https://defaultc9114b60e2b244d793752714acd7ce.90.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/83561e8e0d134aca89a4dc8b16e22be4/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=CJ15xUgekUVJvSookctpFyXbk_jWhoiVbpmPha-DPK0';
  
  const response = await fetch(SAVE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: event.body
  });

  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify({ success: true })
  };
};
