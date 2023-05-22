import journalApi from "@/api/journalApi"

export const loadEntries = async ({ commit }) => {
  const {data} = await journalApi.get()
  if(!data){
    commit('setEntries', [])
    return 
  }
  const entries = []
  for(let id of Object.keys(data)){
    entries.push({
        id,
        ...data[id]
    })
  }
  commit('setEntries', entries)
}
export const updateEntry = async ({ commit }, entry) => {
  const { date, picture, text } = entry;
  const dataToSave = { date, picture, text };
  await journalApi.patch(`/${entry.id}`, dataToSave)
  commit('updateEntry', { ...entry })
}
export const createEntry = async ({ commit }, entry) => {

  const {date, picture, text } = entry;
  const dataToSave = { date, picture, text };
  // const {data} = await journalApi.post('', dataToSave);
  console.log(dataToSave,'asdasdkkkk');
  const {data} = await journalApi.post('', dataToSave);

  dataToSave.id = data.name
  commit('addEntry', dataToSave )
  return data.name;
}
export const deleteEntry = async ({commit} , id) => {
  await journalApi.delete(`${id}`,)
  commit('deleteEntry', id)
  return id;
}
