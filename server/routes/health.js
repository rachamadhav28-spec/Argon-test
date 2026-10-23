module.exports = function healthRoute(req, res) {
  return { status: "healthy", uptime: process.uptime() };
};
