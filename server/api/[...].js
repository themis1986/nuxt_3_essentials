export default ({ req }) => {
  console.log(req.url);
  return $fetch(`https://api.coinlore.net${req.url}`);
};
