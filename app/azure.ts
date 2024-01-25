export function makeAzurePath(path: string, apiVersion: string) {
  // should omit /v1 prefix
  path = path.replace("/v1", "");

  // should add api-key to query string
  path += path.includes("?") ? `&api-version=${apiVersion}` : `?api-version=${apiVersion}`;

  // Test the function
console.log(makeAzurePath("somepath", "v2")); // Expected Output: somepath?api-version=v2
console.log(makeAzurePath("somepath/v1", "v2")); // Expected Output: somepath?api-version=v2
console.log(makeAzurePath("somepath?query=1", "v2")); // Expected Output: somepath?query=1&api-version=v2

return path;
}
