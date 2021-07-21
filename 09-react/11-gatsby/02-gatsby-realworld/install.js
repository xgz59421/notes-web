var fs = require("fs")
var resolve = require("path").resolve
var join = require("path").join
var cp = require("child_process")
var os = require("os")

var lib = resolve(__dirname, "plugins")

fs.readdirSync(lib).forEach(function (mod) {
  var modPath = join(lib, mod)

  if (!fs.existsSync(join(modPath, "package.json"))) {
    return
  }

  var npmCmd = os.platform().startsWith("win") ? "npm.cmd" : "npm"

  cp.spawn(npmCmd, ["i"], {
    env: process.env,
    cwd: modPath,
    stdio: "inherit",
  })
})
