import {takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('TOKEN');
    if (value !== null) {
      return value;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};

function* getCampaign() {
  try {
    const resCampaign = yield axios({
      method: 'GET',
      url: `https://api-talikasih.herokuapp.com/discover/all`,
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'GET_CAMPAIGN_SUCCESS',
        dataNewest: resCampaign.data.dataNewest,
        dataUrgent: resCampaign.data.dataUrgent,
        dataGainedMomentum: resCampaign.data.gainedMomentum,
        error: null,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({type: 'GET_CAMPAIGN_FAILED', error: err.response.data.errors});
  }
}

function* getCampaignDetail(action) {
  try {
    const resCampaign = yield axios({
      method: 'GET',
      url: `https://api-talikasih.herokuapp.com/discover/details/${action.value}`,
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'GET_CAMPAIGN_DETAIL_SUCCESS',
        campaignDetail: resCampaign.data.detailCampaign,
        updateProgress: resCampaign.data.updateCampaign,
        donator: resCampaign.data.donatur,
        comment: resCampaign.data.komen,
        related: resCampaign.data.related,
        remainingTime: resCampaign.data.remainingTime,
        error: null,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'GET_CAMPAIGN_DETAIL_FAILED',
      error: err.response.data.errors,
    });
  }
}

function* getRelatedCampaign(action) {
  try {
    const resCampaign = yield axios({
      method: 'GET',
      url: `https://api-talikasih.herokuapp.com/discover/related/${action.value}`,
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'GET_RELATED_CAMPAIGN_SUCCESS',
        related: resCampaign.data.data,
        error: null,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'GET_RELATED_CAMPAIGN_FAILED',
      error: err.response.data.errors,
    });
  }
}

function* getMyCampaign() {
  try {
    const token = yield getToken();

    const resCampaign = yield axios({
      method: 'GET',
      url: `https://api-talikasih.herokuapp.com/profile/myCampaign`,
      headers: {
        access_token: token,
      },
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'GET_MY_CAMPAIGN_SUCCESS',
        data: resCampaign.data.data,
        error: null,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'GET_MY_CAMPAIGN_FAILED',
      error: err.response.data.errors,
    });
  }
}

function* getMyDonation() {
  try {
    const token = yield getToken();

    const resCampaign = yield axios({
      method: 'GET',
      url: `https://api-talikasih.herokuapp.com/profile/myDonate`,
      headers: {
        access_token: token,
      },
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'GET_MY_DONATION_SUCCESS',
        data: resCampaign.data.data,
        error: null,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'GET_MY_DONATION_FAILED',
      error: err.response.data.errors,
    });
  }
}

function* searchCampaign(action) {
  try {
    const resCampaign = yield axios({
      method: 'GET',
      url: `https://api-talikasih.herokuapp.com/discover/search?search=${action.value}`,
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'SEARCH_CAMPAIGN_SUCCESS',
        data: resCampaign.data.campaigns,
        keyword: action.value,
        selection: 'search',
        error: null,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'SEARCH_CAMPAIGN_FAILED',
      keyword: action.value,
      selection: 'search',
      error: err.response.data.errors,
    });
  }
}

function* filterCampaign(action) {
  try {
    const resCampaign = yield axios({
      method: 'GET',
      url: `https://api-talikasih.herokuapp.com/discover/category?kategori=${action.category}&sort=${action.sort}`,
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'FILTER_CAMPAIGN_SUCCESS',
        data: resCampaign.data.campaigns,
        error: null,
      });
      action.navigation.navigate('Main');
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'FILTER_CAMPAIGN_FAILED',
      error: err.response.data.errors,
    });
  }
}

function* getCampaignByCategory(action) {
  try {
    const resCampaign = yield axios({
      method: 'GET',
      url: `https://api-talikasih.herokuapp.com/discover/category?kategori=${action.value}`,
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'GET_CAMPAIGN_BY_CATEGORY_SUCCESS',
        data: resCampaign.data.campaigns,
        selection: 'category',
        error: null,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'GET_CAMPAIGN_BY_CATEGORY_FAILED',
      selection: 'category',
      error: err.response.data.errors,
    });
  }
}

function* setFilter(action) {
  yield put({type: 'FILTER_SUCCESS', data: action.data});
}

function* setCampaignId(action) {
  yield put({type: 'SET_CAMPAIGN_ID_SUCCESS', data: action.data});
  action.navigation.navigate('Create Campaign');
}

function* createCampaign(action) {
  try {
    const token = yield getToken();

    const resCampaign = yield axios({
      method: 'POST',
      url: `https://api-talikasih.herokuapp.com/campaign`,
      headers: {
        access_token: token,
      },
      data: action.data,
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'CREATE_CAMPAIGN_SUCCESS',
        data: resCampaign.data.data,
        error: null,
      });
      action.navigation.navigate('Main', {screen: 'Donate'});
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'CREATE_CAMPAIGN_FAILED',
      error: err.response.data.errors,
    });
  }
}

function* createComment(action) {
  try {
    const token = yield getToken();

    const resCampaign = yield axios({
      method: 'POST',
      url: `https://api-talikasih.herokuapp.com/comment/${action.value}`,
      headers: {
        access_token: token,
      },
      data: action.data,
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'CREATE_COMMENT_SUCCESS',
        data: resCampaign.data.data,
        error: null,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'CREATE_COMMENT_FAILED',
      error: err.response.data.errors,
    });
  }
}

function* updateCampaignProgress(action) {
  try {
    const token = yield getToken();

    const resCampaign = yield axios({
      method: 'POST',
      url: `https://api-talikasih.herokuapp.com/update/${action.value}`,
      headers: {
        access_token: token,
      },
      data: action.data,
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'UPDATE_CAMPAIGN_PROGRESS_SUCCESS',
        error: null,
      });
      action.navigation.navigate('Main', {screen: 'Donate'});
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'UPDATE_CAMPAIGN_PROGRESS_FAILED',
      error: err.response.data.errors,
    });
  }
}

function* createDonation(action) {
  try {
    const token = yield getToken();

    const resCampaign = yield axios({
      method: 'POST',
      url: `https://api-talikasih.herokuapp.com/charge/${action.value}`,
      headers: {
        access_token: token,
      },
      data: action.data,
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'CREATE_DONATION_SUCCESS',
        dataDonate: resCampaign.data.dataDonate,
        paymentDetail: resCampaign.data.paymentDetail,
        error: null,
      });
      console.log(resCampaign.data.dataDonate);
      console.log(resCampaign.data.paymentDetail);
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'CREATE_DONATION_FAILED',
      error: err.response.data.errors,
    });
  }
}

function* editCampaign(action) {
  try {
    const token = yield getToken();

    const resCampaign = yield axios({
      method: 'PATCH',
      url: `https://api-talikasih.herokuapp.com/discover/edit/${action.value}`,
      headers: {
        access_token: token,
      },
      data: action.data,
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'EDIT_CAMPAIGN_SUCCESS',
        data: resCampaign.data.data,
        error: null,
      });
      action.navigation.navigate('Main', {screen: 'Donate'});
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'EDIT_CAMPAIGN_FAILED',
      error: err.response.data.errors,
    });
  }
}

function* deleteCampaign(action) {
  try {
    const token = yield getToken();

    const resCampaign = yield axios({
      method: 'DELETE',
      url: `https://api-talikasih.herokuapp.com/deleteCampaign/${action.value}`,
      headers: {
        access_token: token,
      },
    });
    if (resCampaign && resCampaign.data) {
      yield put({
        type: 'DELETE_CAMPAIGN_SUCCESS',
        error: null,
      });
      action.navigation.navigate('Main', {screen: 'Donate'});
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'DELETE_CAMPAIGN_FAILED',
      error: err.response.data.errors,
    });
  }
}

function* onShare(action) {
  try {
    const resShare = yield axios({
      method: 'PATCH',
      url: `https://api-talikasih.herokuapp.com/discover/count/${action.value}`,
    });
    if (resShare && resShare.data) {
      yield put({
        type: 'SHARE_CAMPAIGN_SUCCESS',
        error: null,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'SHARE_CAMPAIGN_FAILED',
      error: err.response.data.errors,
    });
  }
}

function* taliKasihSaga() {
  yield takeLatest('GET_CAMPAIGN', getCampaign);
  yield takeLatest('GET_CAMPAIGN_DETAIL', getCampaignDetail);
  yield takeLatest('GET_RELATED_CAMPAIGN', getRelatedCampaign);
  yield takeLatest('GET_MY_CAMPAIGN', getMyCampaign);
  yield takeLatest('GET_MY_DONATION', getMyDonation);
  yield takeLatest('SEARCH_CAMPAIGN', searchCampaign);
  yield takeLatest('FILTER_CAMPAIGN', filterCampaign);
  yield takeLatest('FILTER', setFilter);
  yield takeLatest('GET_CAMPAIGN_BY_CATEGORY', getCampaignByCategory);
  yield takeLatest('CREATE_CAMPAIGN', createCampaign);
  yield takeLatest('CREATE_COMMENT', createComment);
  yield takeLatest('UPDATE_CAMPAIGN_PROGRESS', updateCampaignProgress);
  yield takeLatest('CREATE_DONATION', createDonation);
  yield takeLatest('EDIT_CAMPAIGN', editCampaign);
  yield takeLatest('DELETE_CAMPAIGN', deleteCampaign);
  yield takeLatest('SET_CAMPAIGN_ID', setCampaignId);
  yield takeLatest('SHARE_CAMPAIGN', onShare);
}

export default taliKasihSaga;
