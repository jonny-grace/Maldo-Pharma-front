module.exports = {
  apps: [
    {
      name: 'fontend',
      script: 'npm',
      args: 'run start',
      watch: true,
      ignore_watch: ['node_modules', '.next', 'public'],
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
