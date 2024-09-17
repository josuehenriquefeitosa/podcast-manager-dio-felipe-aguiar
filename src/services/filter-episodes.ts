import { repositoryPodcast } from '../repositories/podcast-repository'
import { PodcastTransferModel } from '../models/podcast-transfer-model';
import { StatusCode } from '../utils/status-code';

export const serviceFilterEpisodes = async (
    podcatsName: string | undefined): Promise<PodcastTransferModel> => {

    // define a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    };

    //busco os dados
    const queryString = podcatsName?.split('?p=')[1] || '';
    const data = await repositoryPodcast(queryString);


    //verifico se tem conteudo
    responseFormat= {
        statusCode:  data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data
    }

    return responseFormat;
}