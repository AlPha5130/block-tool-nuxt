export interface ApiUser {
  userid: number
  name: string
  rights: string[]
  blockid?: number
}

export interface ApiQueryListUser {
  batchcomplete: boolean
  query: {
    users: ApiUser[]
  }
}

export async function canPerform(id: number, right: string): Promise<boolean>
export async function canPerform(username: string, right: string): Promise<boolean>
export async function canPerform(idOrUsername: number | string, right: string) {
  const params = {
    action: 'query',
    list: 'users',
    usprop: 'blockinfo|rights',
    ususers: '',
    ususerids: '',
    format: 'json',
    formatversion: '2',
  }
  if (typeof idOrUsername === 'number') {
    params.ususerids = idOrUsername.toString()
  } else {
    params.ususers = idOrUsername
  }
  const res = await $fetch<ApiQueryListUser>('https://zh.minecraft.wiki/api.php', { params })
  const user = res.query.users[0]
  if (user.rights.includes(right) && !user.blockid) {
    return true
  } else {
    return false
  }
}
