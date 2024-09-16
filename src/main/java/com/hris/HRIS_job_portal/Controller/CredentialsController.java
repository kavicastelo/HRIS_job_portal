package com.hris.HRIS_job_portal.Controller;

import com.hris.HRIS_job_portal.Model.CredentialsModel;
import com.hris.HRIS_job_portal.Service.CredentialsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v2/portal_credentials")
public class CredentialsController {

    @Autowired
    private CredentialsService credentialsService;

    @PostMapping("/add")
    public CredentialsModel addCredentials(@RequestBody CredentialsModel credentials) {
        return credentialsService.addCredentials(credentials);
    }

    @GetMapping("/getAll")
    public Iterable<CredentialsModel> getAllCredentials() {
        return credentialsService.getAllCredentials();
    }

    @GetMapping("/get/{id}")
    public CredentialsModel getCredentials(@PathVariable String id) {
        return credentialsService.getCredentials(id);
    }

    @GetMapping("/getByEmail/{email}")
    public CredentialsModel getCredentialsByEmail(@PathVariable String email) {
        return credentialsService.getCredentialsByEmail(email);
    }

    @GetMapping("/getByEmployeeId/{employeeId}")
    public CredentialsModel getCredentialsByEmployeeId(@PathVariable String employeeId) {
        return credentialsService.getCredentialsByEmployeeId(employeeId);
    }

    @PutMapping("/update/{employeeId}")
    public CredentialsModel updateCredentials(@PathVariable String employeeId, @RequestBody CredentialsModel credentials) {
        return credentialsService.updateCredentials(employeeId, credentials);
    }

    @DeleteMapping("/delete/{employeeId}")
    public CredentialsModel deleteCredentials(@PathVariable String employeeId) {
        return credentialsService.deleteCredentials(employeeId);
    }
}