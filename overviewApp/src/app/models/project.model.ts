export class Project {
    id: number
    name: string
    created_at: Date
    updated_at: Date
    client_id: number
    start_date: Date
    end_date: Date
    progress: number
    revenue: number
    logo: string
    status: number
    type: string
    sprint_ids: number[]
    user_ids: number[]

}