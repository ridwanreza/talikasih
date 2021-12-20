const initialState = {
  dataNewest: [],
  dataUrgent: [],
  dataGainedMomentum: [],
  dataCampaignDetail: [],
  dataUpdateProgress: [],
  dataDonator: [],
  dataComment: [],
  dataRelated: [],
  dataRemainingTime: null,
  dataMyCampaign: [],
  dataMyDonation: [],
  dataSearch: null,
  keyword: null,
  selection: null,
  dataFilter: [],
  dataCampaignByCategory: null,
  filter: false,
  dataCampaign: null,
  dataMyComment: [],
  dataDonate: null,
  dataPaymentDetail: null,
  campaignId: null,
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
        keyword: action.keyword,
        selection: action.selection,
        error: action.error,
      };
    case 'SEARCH_CAMPAIGN_FAILED':
      return {
        ...state,
        isLoading: false,
        keyword: action.keyword,
        selection: action.selection,
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
    case 'GET_CAMPAIGN_BY_CATEGORY':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_CAMPAIGN_BY_CATEGORY_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataCampaignByCategory: action.data,
        selection: action.selection,
        error: action.error,
      };
    case 'GET_CAMPAIGN_BY_CATEGORY_FAILED':
      return {
        ...state,
        isLoading: false,
        selection: action.selection,
        error: action.error,
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
    case 'CREATE_DONATION':
      return {
        ...state,
        isLoading: true,
      };
    case 'CREATE_DONATION_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataDonate: action.dataDonate,
        dataPaymentDetail: action.paymentDetail,
        error: action.error,
      };
    case 'CREATE_DONATION_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'EDIT_CAMPAIGN':
      return {
        ...state,
        isLoading: true,
      };
    case 'EDIT_CAMPAIGN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataCampaign: action.data,
        error: action.error,
      };
    case 'EDIT_CAMPAIGN_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'SET_CAMPAIGN_ID':
      return {
        ...state,
        isLoading: true,
      };
    case 'SET_CAMPAIGN_ID_SUCCESS':
      return {
        ...state,
        isLoading: false,
        campaignId: action.data,
      };
    default:
      return state;
  }
};

export default taliKasih;
