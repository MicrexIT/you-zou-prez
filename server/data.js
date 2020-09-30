const USERS_SEED = [
    {
        id: '0',
        email: 'hp@howarts.com',
        name: 'Harry Potter',
        displayName: 'Potter',
        holidays: [
            {
                userId: '0',
                startDate: '01/08/2020',
                endDate: '10/09/2020',
                status: 'COMPLETED',
            },
            {
                userId: '0',
                startDate: '25/09/2020',
                endDate: '25/10/2020',
                status: 'PENDING',
            },
        ],
        sickleaves: [
            {
                userId: '0',
                startDate: '01/08/2020',
                endDate: '10/09/2020',
                status: 'COMPLETED',
                reason: 'quidditch',
            },
            {
                userId: '0',
                startDate: '25/09/2020',
                endDate: '25/10/2020',
                status: 'COMPLETED',
                reason: 'that guy voldemort',
            },
        ],
    },
    {
        id: '1',
        email: 'hg@howars.com',
        name: 'Hermione Grange',
        displayName: 'Hermione',
        holidays: [
            {
                userId: '1',
                startDate: '25/01/2008',
                endDate: '25/10/2008',
                status: 'PENDING',
            },
        ],
        sickleaves: [],
    },
]

class Data {
    // data  []
    constructor() {
        this.data = [...USERS_SEED]
    }

    async getUsers() {
        return this.data
    }

    async getUser({ id }) {
        return this.data.find((u) => u.id === id)
    }

    async getAllTimeOff({ status }) {
        if (!status) {
            return this.data.reduce((acc, user) => {
                return [
                    ...acc,
                    ...user.holidays.map((h) => ({ ...h, user })),
                    ...user.sickleaves.map((s) => ({ ...s, user })),
                ]
            }, [])
        }
        return this.data.reduce(
            (acc, user) => [
                ...acc,
                ...user.holidays.filter((h) => h.status === status).map((h) => ({ ...h, user })),
                ...user.sickleaves.filter((h) => h.status === status).map((s) => ({ ...s, user })),
            ],
            []
        )
    }

    async createUser({ user: { email, name, displayName } }) {
        const user = {
            id: this.data.length,
            email,
            name,
            displayName,
            holidays: [],
            sickleaves: [],
        }

        this.data.push(user)

        return Data.formatResponse('user', user, '200', true, 'ok')
    }

    async createTimeOff({ userId, startDate, endDate, reason }) {
        const user = this.data.find(({ id }) => id === userId)
        if (reason.length > 0) {
            user.sickleaves.push({
                userId,
                startDate,
                endDate,
                reason,
                status: 'PENDING',
            })
        } else {
            user.holidays.push({
                userId,
                startDate,
                endDate,
                status: 'PENDING',
            })
        }
        return Data.formatResponse('user', user, '200', true, 'ok')
    }

    async updateUserHolidays({ id, holidays }) {
        const user = this.data.find((u) => u.id === id)
        if (!user) {
            return
        }
        user.holidays = holidays
        return user
    }

    static formatResponse(returnField, respData, code = '200', success = true, message = 'ok') {
        return {
            code,
            message,
            success,
            [returnField]: respData,
        }
    }
}

export default new Data()
