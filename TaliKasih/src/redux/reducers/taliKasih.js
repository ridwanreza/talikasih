const initialState = {
  dataCampaignDetailUpdates: [
    {
      id: 1,
      date: 'TODAY',
      updateCat: 'Non-Withdrawal',
      story:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi sed sit. In faucibus leo etiam cras elit malesuada augue. Sagittis quisque non, nullam facilisis. ',
    },
    {
      id: 2,
      date: 'YESTERDAY',
      updateCat: 'Withdrawal',
      amount: 20000000,
      story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      id: 3,
      date: '3 Oktober 2020',
      updateCat: 'Withdrawal',
      amount: 20000000,
      story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      id: 4,
      date: '30 September 2020',
      updateCat: 'Non-Withdrawal',
      story:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi sed sit. In faucibus leo etiam cras elit malesuada augue. Sagittis quisque non, nullam facilisis. ',
    },
  ],

  dataNewest: [],
  dataUrgent: [],
  dataGainedMomentum: [],
  dataCampaignDetail: [],
  dataUpdateProgress: [],
  dataDonator: [],
  dataComment: [],
  dataRelated: [],
  dataRemainingTime: '',
  dataMyCampaign: [],
  dataMyDonation: [],
  dataSearch: [],
  dataFilter: [],
  filter: false,
  dataCampaign: [],
  dataMyComment: [],
  error: null,
  isLoading: false,
};

const taliKasih = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CAMPAIGN':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_CAMPAIGN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataNewest: action.dataNewest,
        dataUrgent: action.dataUrgent,
        dataGainedMomentum: action.dataGainedMomentum,
        error: action.error,
      };
    case 'GET_CAMPAIGN_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'GET_CAMPAIGN_DETAIL':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_CAMPAIGN_DETAIL_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataCampaignDetail: action.campaignDetail,
        dataUpdateProgress: action.updateProgress,
        dataDonator: action.donator,
        dataComment: action.comment,
        dataRelated: action.related,
        dataRemainingTime: action.remainingTime,
        error: action.error,
      };
    case 'GET_CAMPAIGN_DETAIL_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'GET_RELATED_CAMPAIGN':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_RELATED_CAMPAIGN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataRelated: action.related,
        error: action.error,
      };
    case 'GET_RELATED_CAMPAIGN_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'GET_MY_CAMPAIGN':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_MY_CAMPAIGN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataMyCampaign: action.data,
        error: action.error,
      };
    case 'GET_MY_CAMPAIGN_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'GET_MY_DONATION':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_MY_DONATION_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataMyDonation: action.data,
        error: action.error,
      };
    case 'GET_MY_DONATION_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'SEARCH_CAMPAIGN':
      return {
        ...state,
        isLoading: true,
      };
    case 'SEARCH_CAMPAIGN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataSearch: action.data,
        error: action.error,
      };
    case 'SEARCH_CAMPAIGN_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'FILTER_CAMPAIGN':
      return {
        ...state,
        isLoading: true,
      };
    case 'FILTER_CAMPAIGN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataFilter: action.data,
        error: action.error,
      };
    case 'FILTER_CAMPAIGN_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'FILTER':
      return {
        ...state,
        isLoading: true,
      };
    case 'FILTER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        filter: action.data,
      };
    case 'CREATE_CAMPAIGN':
      return {
        ...state,
        isLoading: true,
      };
    case 'CREATE_CAMPAIGN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataCampaign: action.data,
        error: action.error,
      };
    case 'CREATE_CAMPAIGN_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'CREATE_COMMENT':
      return {
        ...state,
        isLoading: true,
      };
    case 'CREATE_COMMENT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataMyComment: action.data,
        error: action.error,
      };
    case 'CREATE_COMMENT_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'UPDATE_CAMPAIGN_PROGRESS':
      return {
        ...state,
        isLoading: true,
      };
    case 'UPDATE_CAMPAIGN_PROGRESS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'UPDATE_CAMPAIGN_PROGRESS_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default taliKasih;
