export const namespaced = true

export const state = {
  formatDDays: [
    "D-9 (D-%d)",
    "D 9 (D %d)",
    "D-day 9 (D-day %d)",
    "D day 9 (D day %d)",

    "D-09 (D-%dd)",
    "D 09 (D %dd)",
    "D-day 09 (D-day %dd)",
    "D day 09 (D day %dd)",
  ],
  formatDates: [
    "2019.2.9 (yyyy.m.d)",
    "2019-2-9 (yyyy-m-d)",
    "19.2.9 (yy.m.d)",
    "19-2-9 (yy-m-d)",

    "2.9.2019 (m.d.yyyy)",
    "2-9-2019 (m-d-yyyy)",
    "2.9.19 (m.d.yy)",
    "2-9-19 (m-d-yy)",

    "2019.02.09 (yyyy.mm.dd)",
    "2019-02-09 (yyyy-mm-dd)",
    "19.02.09 (yy.mm.dd)",
    "19-02-09 (yy-mm-dd)",

    "02.09.2019 (mm.dd.yyyy)",
    "02-09-2019 (mm-dd-yyyy)",
    "02.09.19 (mm.dd.yy)",
    "02-09-19 (mm-dd-yy)",
  ],
  formatDDay: "D-9 (D-%d)",
  formatDate: "2019.2.9 (yyyy.m.d)",
}

export const mutations = {
  UPDATE_FORMAT_DDAY(state, formatDDay) {
    state.formatDDay = formatDDay
  },
  UPDATE_FORMAT_DATE(state, formatDate) {
    state.formatDate = formatDate
  },

  RESET_FORMAT(state, { formatDDay, formatDate }) {
    state.formatDDay = formatDDay
    state.formatDate = formatDate
  },
}

export const actions = {
  upformatDateDDay({ commit }, formatDDay) {
    commit("UPDATE_FORMAT_DDAY", formatDDay)
  },
  upformatDateDate({ commit }, formatDate) {
    commit("UPDATE_FORMAT_DATE", formatDate)
  },

  resetFormat({ commit }, { formatDDay, formatDate }) {
    commit("RESET_FORMAT", { formatDDay, formatDate })
  },
}