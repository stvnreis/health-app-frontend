export default {
  fetch: async function getData<T>({
    path,
    query,
    id,
  }: {
    path: string;
    query?: any;
    id?: number | string;
  }): Promise<T> {
    return fetch(process.env.NEXT_PUBLIC_API_URL + encodeURI(path))
      .then((response) => response.json())
      .then((body) => body.data);
  },
  findById: async function findOne<T>(
    path: string,
    id: string | number,
  ): Promise<T> {
    return fetch(process.env.NEXT_PUBLIC_API_URL + path + `/${id}`, {})
      .then((response) => response.json())
      .then((body) => body.data);
  },
  save: async function save(path: string, data: any): Promise<void> {
    fetch(process.env.NEXT_PUBLIC_API_URL + path, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "Application/json",
      },
    });
  },
};
