const initialState = {
  dataCampaign: [],
  dataCampaignDetail: [],
  dataCampaignDetailComment: [],
  searchCampaign: [],
  renderType: '',
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
        dataCampaign: action.data,
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
        dataCampaignDetail: action.data,
      };
    case 'GET_CAMPAIGN_DETAIL_COMMENT':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_CAMPAIGN_DETAIL_COMMENT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataCampaignDetailComment: action.data,
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
        searchCampaign: action.data,
      };
    case 'RENDER_TYPE':
      return {
        ...state,
        isLoading: true,
      };
    case 'RENDER_TYPE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        renderType: action.data,
      };
    default:
      return state;
  }
};

export default taliKasih;
