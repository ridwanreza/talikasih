import defaultPoster from '../../assets/images/defaultPoster.png';

const initialState = {
  dataCampaign: [
    {
      id: 1,
      title: 'Aid for necessary items to help our country',
      category: 'Medical',
      keyword: 'Aksi Cepat Tanggap',
      raised: 30000000,
      goal: 50000000,
      img: defaultPoster,
    },
    {
      id: 2,
      title: 'Aid for necessary items to help our country',
      category: 'Medical',
      keyword: 'Aksi Cepat Tanggap',
      raised: 30000000,
      goal: 50000000,
      img: defaultPoster,
    },
    {
      id: 3,
      title: 'Aid for necessary items to help our country',
      category: 'Medical',
      keyword: 'Aksi Cepat Tanggap',
      raised: 30000000,
      goal: 50000000,
      img: defaultPoster,
    },
    {
      id: 4,
      title: 'Aid for necessary items to help our country',
      category: 'Medical',
      keyword: 'Aksi Cepat Tanggap',
      raised: 30000000,
      goal: 50000000,
      img: defaultPoster,
    },
  ],
  dataMyDonation: [
    {
      id_user: 1,
      title: 'Aid for necessary items to help our country',
      donation: 320000,
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi sed sit. In faucibus leo etiam cras elit malesuada augue. In faucibus leo etiam cras elit malesuada augue',
      time: '12 minutes ago',
    },
    {
      id_user: 1,
      title: 'Aid for necessary items to help our country',
      donation: 320000,
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi sed sit. In faucibus leo etiam cras elit malesuada augue. In faucibus leo etiam cras elit malesuada augue',
      time: '12 minutes ago',
    },
    {
      id_user: 1,
      title: 'Aid for necessary items to help our country',
      donation: 320000,
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi sed sit. In faucibus leo etiam cras elit malesuada augue. In faucibus leo etiam cras elit malesuada augue',
      time: '12 minutes ago',
    },
    {
      id_user: 1,
      title: 'Aid for necessary items to help our country',
      donation: 320000,
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi sed sit. In faucibus leo etiam cras elit malesuada augue. In faucibus leo etiam cras elit malesuada augue',
      time: '12 minutes ago',
    },
    {
      id_user: 1,
      title: 'Aid for necessary items to help our country',
      donation: 320000,
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi sed sit. In faucibus leo etiam cras elit malesuada augue. In faucibus leo etiam cras elit malesuada augue',
      time: '12 minutes ago',
    },
    {
      id_user: 1,
      title: 'Aid for necessary items to help our country',
      donation: 320000,
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi sed sit. In faucibus leo etiam cras elit malesuada augue. In faucibus leo etiam cras elit malesuada augue',
      time: '12 minutes ago',
    },
  ],
  dataCampaignDetail: [],
  dataCampaignDetailComment: [],
  searchCampaign: [],
  renderType: '',
  filter: '',
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
    default:
      return state;
  }
};

export default taliKasih;
