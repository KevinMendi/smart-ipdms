import http from "../http-common";

class FileDataService {
    AnalyzeImage(data) {
        return http.post("/IpdmsFile/analyze/image", data);
    } 

    SaveProject(data) {
        return http.post("/IpdmsFile", data);
    }

    SavePages(data) {
        return http.post("/IpdmsFile/save-pages", data);
    }

    GetProjectList(userId, roleId, year) {
        return http.get(`/IpdmsFile/projects/user/${userId}/role/${roleId}/year/${year}`);
    }

    GetDocumentListByProjectId(projectId) {
        return http.get(`/IpdmsFile/project/document/${projectId}`);
    }

    GetProjectById(projectId) {
        return http.get(`/IpdmsFile/project/${projectId}`);
    }

    UpdateProject(id, data) {
        return http.put(`/IpdmsFile/${id}`, data);
    }

    GetConvertedProjectDocumentListByProjectId(projectId) {
        return http.get(`/IpdmsFile/project-converted/document/${projectId}`);
    }

    GetConvertedProjectDetailsById(projectId) {
        return http.get(`/IpdmsFile/project-converted/${projectId}`);
    }

    GetDocumentPageById(documentId) {
        return http.get(`/IpdmsFile/document-page/document/${documentId}`);
    }
    
    
}

export default new FileDataService();