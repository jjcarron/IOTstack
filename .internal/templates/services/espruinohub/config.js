const espruinohub = () => {
  const retr = {};

  const serviceName = 'espruinohub';

  retr.getConfigOptions = () => {
    return {
      serviceName, // Required
      labeledPorts: {
        "1888:1888": 'http'
      },
      volumes: false,
      networks: false,
      logging: true
    }
  };

  retr.getHelp = () => {
    return {
      serviceName, // Required
      website: '', // Website of service
      rawMarkdownRemote: '', // Usually links to github raw help pages.
      rawMarkdownLocal: '', // Relative path to docs locally
      onlineRendered: '' // Usually links to the github page for this service.
    };
  };

  retr.getCommands = () => {
    return {
      commands: {} // Key/value pair of helper commands user can run locally
    };
  };

  retr.getMeta = () => {
    return {
      serviceName, // Required
      displayName: 'EspruinoHub',
      serviceTypeTags: ['mqtt', 'ble', 'rpi only'],
      iconUri: '/logos/espruinohub.png'
    };
  };

  return retr;
};

module.exports = espruinohub;