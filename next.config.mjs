const isProduction = process.env.NODE_ENV === "production";
const repoName = "CV"; // Замените на имя вашего репозитория

module.exports = {
  assetPrefix: isProduction ? `/${repoName}/` : "",
  basePath: isProduction ? `/${repoName}` : "",
  trailingSlash: true,
};
