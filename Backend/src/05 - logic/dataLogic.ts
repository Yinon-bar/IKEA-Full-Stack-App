import dal from "../02 - utils/dal";
import Model from "../04 - models/Model";

async function getData(): Promise<Model[]> {
  const sql = "SELECT * FROM furniture;";
  const data = await dal.execute(sql);
  return data;
}

export default { getData };
