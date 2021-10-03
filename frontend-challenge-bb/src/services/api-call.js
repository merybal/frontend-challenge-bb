import { getLinkHeader } from "../helpers/paginator";
import { activitiesPerPage } from "../constants/constants";

export const getActivities = async (page) => {
  const api = `http://json-biglifeapp.herokuapp.com/activity?_page=${page}&_limit=${activitiesPerPage}`;
  const response = await fetch(api);
  const data = await response.json();
  for (const item of data) {
    const parsedActivity = JSON.parse(item.activity);
    item.activity = parsedActivity;
  }
  const linkHeader = await getLinkHeader(response);
  return { linkHeader: linkHeader, data: data, };
};

export const getPageOne = async () => {
  return await getActivities(1);
};

