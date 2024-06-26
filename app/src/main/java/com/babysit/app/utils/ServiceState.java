package com.babysit.app.utils;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum ServiceState {
    REQUESTED,
    RESERVED,
    IN_PROGRESS,
    COMPLETED
}
